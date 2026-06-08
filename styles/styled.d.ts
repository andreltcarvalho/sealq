import "styled-components";
import type { ConcursoTheme } from "./concurso-theme";

declare module "styled-components" {
  // styled-components requires interface augmentation for DefaultTheme.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ConcursoTheme {}
}
