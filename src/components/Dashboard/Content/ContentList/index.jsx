import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { getPaginatedContent } from 'store/content/thunk';
import { setCurPage, setSearchResults, setVisible } from 'store/content/slice';
import { ComponentLayout } from 'layouts';
import { VideoCard, VideoModal } from 'components/Dashboard';
import { AutoComplete, Pagination } from 'components/AntDesign';
import { getSearchResults } from 'utils';
import './style.css';
import { Loader } from 'shared/components';

function ContentList() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const {
    matchedContent,
    curPage,
    searchResults,
    contents,
    contentsTitles,
    contentsCount,
  } = useAppSelector((state) => state.matchContents);
  const onSelect = async (content) => {
    const contentResults = await getSearchResults(content, contents, dispatch);
    dispatch(setSearchResults(contentResults));
    dispatch(setVisible(true));
  };

  const onChange = (data) => {
    setValue(data);
  };

  const changePage = (pageNumber) => {
    dispatch(setCurPage(pageNumber));
  };

  const onInputKeyDown = ({ key }) => {
    if (key === 'Enter') {
      onSelect(value);
    }
  };

  const filterOptions = (inputValue, option) => option.value.toUpperCase().indexOf(
    inputValue.toUpperCase(),
  ) !== -1;

  useEffect(() => {
    if (!contents[curPage] || !matchedContent) {
      dispatch(getPaginatedContent({ limit: 10, page: curPage }));
    }
  }, [curPage]);

  return (
    <>
      <VideoModal searchResults={searchResults} />
      {
      contentsCount ? (
        <ComponentLayout title="Videos Page" heading="Videos">
          <div className="contents-list-container__top-sub-container">
            <AutoComplete
              value={value}
              options={contentsTitles}
              onSelect={onSelect}
              onChange={onChange}
              onInputKeyDown={onInputKeyDown}
              filterOption={filterOptions}
              placeholder="Search a video"
              style={{
                width: 350,
              }}
            />
          </div>
          <div className="contents-list-bottom">
            <div className="contents-list">
              {
              contents[curPage]
                ? contents[curPage].map(({ id, title, permalink }) => (
                  <VideoCard
                    key={id}
                    id={id}
                    title={title}
                    permalink={permalink}
                  />
                ))
                : <Loader />
            }
            </div>
            <Pagination
              className="my-pagination"
              showSizeChanger={false}
              defaultCurrent={curPage}
              total={contentsCount}
              onChange={changePage}
            />
          </div>
        </ComponentLayout>
      ) : (
        <ComponentLayout title="Videos Page" heading="Videos">
          There are no contents to show
        </ComponentLayout>
      )
    }
    </>
  );
}

export default ContentList;
