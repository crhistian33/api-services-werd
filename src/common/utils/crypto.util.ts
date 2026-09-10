import * as crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';

function getEncryptionKey(): Buffer {
  const keyStr = process.env.ENCRYPTION_KEY;
  if (!keyStr) {
    throw new Error(
      'ENCRYPTION_KEY no está configurada en las variables de entorno.',
    );
  }
  // Generamos un hash de 32 bytes a partir del string provisto en el .env
  // Esto asegura que la llave tenga siempre el tamaño correcto para aes-256-gcm.
  return crypto.createHash('sha256').update(String(keyStr)).digest();
}

/**
 * Encripta un texto usando AES-256-GCM
 * @param text Texto plano a encriptar
 * @returns Texto encriptado en formato iv:authTag:encryptedText
 */
export function encryptData(text: string): string {
  if (!text) return text;

  try {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ALGORITHM, getEncryptionKey(), iv);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const authTag = cipher.getAuthTag().toString('hex');

    return `${iv.toString('hex')}:${authTag}:${encrypted}`;
  } catch (error) {
    console.error('[CryptoUtil] Error al encriptar:', error);
    throw new Error('Falló la encriptación de los datos sensibles.');
  }
}

/**
 * Desencripta un texto previamente encriptado con encryptData
 * @param encryptedData Texto encriptado (formato iv:authTag:encryptedText)
 * @returns Texto plano desencriptado (o el original si no estaba encriptado)
 */
export function decryptData(encryptedData: string): string {
  if (!encryptedData) return encryptedData;

  // Si no tiene el formato esperado, asumimos que es texto plano (legacy)
  const parts = encryptedData.split(':');
  if (parts.length !== 3) {
    return encryptedData;
  }

  try {
    const [ivHex, authTagHex, encryptedText] = parts;
    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');

    const decipher = crypto.createDecipheriv(ALGORITHM, getEncryptionKey(), iv);
    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  } catch (error) {
    console.error(
      '[CryptoUtil] Error al desencriptar, podría ser una llave incorrecta:',
      error,
    );
    // Devolvemos el texto original por precaución
    return encryptedData;
  }
}
