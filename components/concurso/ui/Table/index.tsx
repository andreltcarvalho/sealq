"use client";

import * as S from "./styles";
import { TableRow } from "./TableRow";

export interface ConcursoTableData {
  id: string;
  protocol: string;
  name: string;
  projectTitle?: string;
  date?: string;
  averageGrade?: number | string | null;
  myVoteStatus: "pendente" | "revisao" | "avaliado" | "conflito";
  isAdmin?: boolean;
}

interface TableProps {
  columns: string[];
  data: ConcursoTableData[];
  onAction: (id: string) => void; // Ação primária (ex: avaliar/editar)
  onView?: (id: string) => void; // Ação secundária: ver avaliação
}

export const Table = ({ columns, data, onAction, onView }: TableProps) => {
  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <tr>
            {columns.map((col) => (
              <S.Th key={col}>{col}</S.Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              data={item}
              onAction={onAction} // Passando a ação primária
              onView={onView}
            />
          ))}
        </tbody>
      </S.Table>
    </S.TableContainer>
  );
};

