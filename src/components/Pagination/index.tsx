import { useEffect, useState } from "react";
import { Button, PaginationContainer } from "./styles";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setPage: (page: number) => void;
}

export function Pagination({
  totalPages,
  currentPage,
  setPage,
}: PaginationProps) {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    setPages(pagesArray);
  }, [totalPages]);

  return (
    <>
      {totalPages > 1 && (
        <PaginationContainer>
          <div>
            {pages.map((page) => (
              <Button
                onClick={() => setPage(page)}
                selected={currentPage === page}
              >
                {page}
              </Button>
            ))}
          </div>
        </PaginationContainer>
      )}
    </>
  );
}
