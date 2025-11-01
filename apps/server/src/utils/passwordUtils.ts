// utils/crypto.ts
async function generateSalt(length = 16): Promise<string> {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bufferToBase64(bytes);
}

async function hashPassword(
  password: string,
  saltBase64: string,
  iterations = 100_000,
  keyLength = 32,
): Promise<string> {
  const enc = new TextEncoder();

  const salt = base64ToBuffer(saltBase64);
  const passwordKey = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits', 'deriveKey'],
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: salt.buffer as BufferSource,
      iterations,
      hash: 'SHA-256',
    },
    passwordKey,
    keyLength * 8,
  );

  const hashArray = new Uint8Array(derivedBits);
  return bufferToBase64(hashArray);
}

function bufferToBase64(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++)
    binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

function base64ToBuffer(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export { generateSalt, hashPassword };
