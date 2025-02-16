import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';
import { useMediaQuery } from 'react-responsive'
import { CardLab } from '../card-lab';
import { useGetLabsQuery } from '../../services/labService';

function Pagination({ itemsPerPage, photo }: any) {
    //States
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const [itemOffset, setItemOffset] = useState(0);

    //API - Get labs query
    const { isSuccess, data } = useGetLabsQuery({})

    //Effects
    useEffect(() => {
        const handleResize = () => {
            const matchMedia = window.matchMedia("(max-width: 600px)");
            console.log(matchMedia.matches);
        }

        window.addEventListener('resize', handleResize);
        window.removeEventListener('resize', handleResize);
    }, []);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data?.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % data?.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className={styles.cards}>
                {
                    isSuccess && currentItems?.map((lab: any, index: number) => {
                        return <React.Fragment key={index}>
                            <CardLab
                                id={(index + 1).toString()}
                                photo={lab?.profile_picture}
                                avatar={photo}
                                name={lab.name}
                                location={lab.city?.name}
                                time={lab?.working_days}
                                tell={lab.phone_number}
                                website={lab.website} />
                        </React.Fragment>
                    })
                }
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={isMobile ? 4 : 7}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="previous" //@ts-ignore
                renderOnZeroPageCount={null}
                pageClassName={styles.page}
                nextClassName={styles.pageNavigate}
                previousClassName={styles.pageNavigate}
                containerClassName={styles.paginationContainer}
                activeClassName={styles.active}
                breakClassName={styles.break}
            />
        </>
    );
}

export default Pagination;
