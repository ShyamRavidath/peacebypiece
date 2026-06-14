// Downloads target-site assets into public/images
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const assets = [
  // hero classroom photo (request 1600w jpg)
  ['public/images/hero-classroom.jpg',
   'https://static.wixstatic.com/media/2ab5b8_3974265507544c9a903ab65cd0b5afb9~mv2.jpg/v1/fill/w_1600,h_1010,al_c,q_85,enc_auto/2ab5b8_3974265507544c9a903ab65cd0b5afb9~mv2.jpg'],
  // hands together photo
  ['public/images/hands.jpg',
   'https://static.wixstatic.com/media/84770f_6d8f65290fd8480282082b66ac697efa~mv2_d_8688_5792_s_4_2.jpeg/v1/fill/w_1200,h_736,al_c,q_85,enc_auto/84770f_6d8f65290fd8480282082b66ac697efa~mv2_d_8688_5792_s_4_2.jpeg'],
];

async function dl([path, url]) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, buf);
  console.log(`✓ ${path} (${(buf.length / 1024).toFixed(0)} KB)`);
}

const results = await Promise.allSettled(assets.map(dl));
results.forEach((r, i) => { if (r.status === 'rejected') console.error(`✗ ${assets[i][0]}: ${r.reason.message}`); });
