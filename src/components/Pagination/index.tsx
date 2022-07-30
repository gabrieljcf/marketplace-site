import { Fragment, useEffect, useState } from "react";

import navigatePrevImg from "../../assets/navigate_prev.svg";
import navigateNextImg from "../../assets/navigate_next.svg";
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
  const PAGINATION_LIMIT = 5;
  const INITIAL_VALUE = 1;

  useEffect(() => {
    const pagesArray = [];
    for (let page = INITIAL_VALUE; page <= totalPages; page++) {
      pagesArray.push(page);
    }
    setPages(pagesArray);
  }, [totalPages]);

  function navigateNext() {
    const page =
      currentPage + INITIAL_VALUE > totalPages
        ? currentPage
        : currentPage + INITIAL_VALUE;
    setPage(page);
  }

  function navigatePrev() {
    const page =
      currentPage === INITIAL_VALUE ? currentPage : currentPage - INITIAL_VALUE;
    setPage(page);
  }

  const showPageRange = (page: number) =>
    currentPage >= PAGINATION_LIMIT &&
    currentPage === page &&
    currentPage !== PAGINATION_LIMIT &&
    currentPage !== totalPages;

  const showLastPage = (page: number) =>
    page === totalPages && totalPages > PAGINATION_LIMIT;

  return (
    <>
      {totalPages > 1 && (
        <PaginationContainer>
          <div>
            <Button onClick={navigatePrev} disabled={currentPage === 1}>
              <img src={navigatePrevImg} alt="Página anterior" />
            </Button>
            {pages.map((page) => (
              <Fragment key={page}>
                {page <= PAGINATION_LIMIT && (
                  <Button
                    onClick={() => setPage(page)}
                    selected={currentPage === page}
                  >
                    {page}
                  </Button>
                )}
                {showPageRange(page) && (
                  <Button
                    onClick={() => setPage(page)}
                    selected={currentPage === page}
                  >
                    {page}
                  </Button>
                )}
                {showLastPage(page) && (
                  <>
                    {currentPage + 1 !== totalPages && (
                      <span>...</span>
                    )}
                    <Button
                      onClick={() => setPage(page)}
                      selected={currentPage === page}
                    >
                      {page}
                    </Button>
                  </>
                )}
              </Fragment>
            ))}
            <Button
              onClick={navigateNext}
              disabled={currentPage === totalPages}
            >
              <img src={navigateNextImg} alt="Próxima página" />
            </Button>
          </div>
        </PaginationContainer>
      )}
    </>
  );
}
