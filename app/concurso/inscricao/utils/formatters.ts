export function sanitizeFilename(originalFilename: string): string {
  // 1. Separa a extensão do nome (ex: ".pdf")
  const extensionIndex = originalFilename.lastIndexOf('.');
  const extension = extensionIndex !== -1 ? originalFilename.substring(extensionIndex) : '';
  let name = extensionIndex !== -1 ? originalFilename.substring(0, extensionIndex) : originalFilename;

  name = name
    .normalize('NFD')                     // Separa os acentos das letras (ex: 'ã' vira 'a' + '~')
    .replace(/[\u0300-\u036f]/g, '')      // Remove os acentos que foram separados no passo anterior
    .replace(/[^a-zA-Z0-9- ]/g, '')       // Remove qualquer coisa que não seja letra, número, hífen ou espaço
    .trim()                               // Remove espaços em branco no começo e no fim
    .replace(/\s+/g, '-')                 // Troca os espaços por hifens
    .toLowerCase();                       // Deixa tudo em minúsculo para padronizar

  const timestamp = Date.now();

  return `${name}-${timestamp}${extension}`;
}