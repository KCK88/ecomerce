import fs from "fs";
import path from "path";

export async function imageToBase64(
  imagePath: string,
  imageType: string,
): Promise<string> {
  try {
    const absolutePath = path.isAbsolute(imagePath)
      ? imagePath
      : path.resolve(process.cwd(), imagePath);

    const imageBuffer = await fs.promises.readFile(absolutePath);

    const base64String = imageBuffer.toString("base64");
    return `data:image/${imageType.toLowerCase()};base64,${base64String}`;
  } catch (error) {
    throw new Error(`Erro ao converter imagem para Base64: ${error}`);
  }
}
