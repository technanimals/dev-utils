import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { Stream } from 'stream';

export function convertStreamToString(stream: Stream): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
}
/**
 *
 * @param client
 * @param Key
 * @param Bucket
 */
export async function getS3Object(client: S3Client, Key: string, Bucket: string) {
  const command = new GetObjectCommand({ Bucket, Key });
  const { Body } = await client.send(command);
  if (!Body) {
    return '';
  }

  return convertStreamToString(Body as Stream);
}
