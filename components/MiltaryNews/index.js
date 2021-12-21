import React from 'react';
import NewsCard from '../NewsCard';
import publicationsList from './miltarynews';
import {highlightString} from '../../lib/utils';

const Publications = ({max = false, searchQuery = ''}) => {
    const filteredList = publicationsList.filter((post) => {
        const {title = '', date = '', author = '', link = '',} = post;
        return (
            title.toLocaleLowerCase().includes(searchQuery) ||
            author.toLocaleLowerCase().includes(searchQuery) ||
            date.toLocaleLowerCase().includes(searchQuery) ||
            link.toLocaleLowerCase().includes(searchQuery) ||
        );
    });
    const posts = searchQuery ? filteredList : publicationsList;

    return (
        <div className="publications">
            {filteredList && filteredList.length <= 0 && (
                <div className="publications__no-results">
                    No Results found for search
                </div>
            )}
            <div className="publications__list">
                {posts &&
                    Array.isArray(posts) &&
                    posts.map((post, index) => {
                        // if max limit is set, only return specified amount
                        if (max && index >= max) return null;

                        const {
                            title = '',
                            author = '',
                            date = '',
                            link = '',
                        } = post;
                        return (
                            <React.Fragment key={title}>
                                <NewsCard
                                    title={highlightString(title, searchQuery)}
                                    date={highlightString(date, searchQuery)}
                                    author={highlightString(author, searchQuery)}
                                    link={link}
                                />
                            </React.Fragment>
                        );
                    })}
            </div>

            <style jsx>
                {`
                    .publications__list {
                        min-height: 300px;
                    }
                    .publications__no-results {
                        color: red;
                    }
                `}
            </style>
        </div>
    );
};
export default Publications;
