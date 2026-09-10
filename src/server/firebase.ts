import { cert, getApp, getApps, initializeApp, type ServiceAccount } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

/**
 * Dashboard paste boxes and shell copy-paste both tend to carry the surrounding
 * quotes from a .env line, and some hosts prefer the whole JSON base64-encoded.
 * Accept all three shapes rather than failing on a stray quote character.
 */
function normalizeServiceAccountJson(raw: string): string {
  let value = raw.trim();
  if (
    (value.startsWith("'") && value.endsWith("'")) ||
    (value.startsWith('"') && value.endsWith('"'))
  ) {
    value = value.slice(1, -1).trim();
  }
  if (value.startsWith("{")) return value;

  try {
    const decoded = Buffer.from(value, "base64").toString("utf8").trim();
    if (decoded.startsWith("{")) return decoded;
  } catch {
    // Fall through and let JSON.parse report the problem.
  }
  return value;
}

/**
 * Reads the service account from the environment. Either paste the whole
 * service account JSON into FIREBASE_SERVICE_ACCOUNT, or set the three
 * individual values. Returns null when Firebase is not configured.
 */
function readServiceAccount(): ServiceAccount | null {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (raw) {
    try {
      const parsed = JSON.parse(normalizeServiceAccountJson(raw));
      return {
        projectId: parsed.project_id ?? parsed.projectId,
        clientEmail: parsed.client_email ?? parsed.clientEmail,
        privateKey: (parsed.private_key ?? parsed.privateKey ?? "").replace(/\n/g, "\n"),
      };
    } catch {
      console.error("FIREBASE_SERVICE_ACCOUNT is not valid JSON.");
      return null;
    }
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;
  if (!projectId || !clientEmail || !privateKey) return null;

  // Vercel and .env files keep the key on one line, so restore the newlines.
  return { projectId, clientEmail, privateKey: privateKey.replace(/\n/g, "\n") };
}

/** The Firestore handle, or null when Firebase credentials are not set. */
export function getDb(): Firestore | null {
  if (getApps().length) return getFirestore(getApp());

  const serviceAccount = readServiceAccount();
  if (!serviceAccount) return null;

  initializeApp({ credential: cert(serviceAccount) });
  return getFirestore(getApp());
}
