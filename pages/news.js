import ContentBlock from '../components/ContentBlock';
import Layout from '../components/Layout';
import {useState} from 'react';
import News from '../components/MiltaryNews';
import Head from 'next/head';

const NewsPage = (props) => {
    const [searchQuery, updateSearchQuery] = useState('');

    return (
        <Layout>
            <Head>
                <title>News</title>
                <meta name="title" content="News" />
                <meta name="description" content="" />
            </Head>
            <ContentBlock>
                <div className="publications-search">
                    <div>Search</div>
                    <input
                        tabIndex="-1"
                        autoComplete="off"
                        name="publications-search"
                        value={searchQuery}
                        placeholder="What are you looking for?"
                        onChange={(e) =>
                            updateSearchQuery(e.target.value.toLocaleLowerCase())
                        }
                    />
                    <img src="/icon-search.svg" />
                </div>
                <h1>News</h1>
                <Publications searchQuery={searchQuery} />
            </ContentBlock>
            <style jsx>
                {`
                    .publications-search {
                        margin-bottom: 60px;
                        width: 360px;
                        max-width: 100%;
                        position: relative;
                    }
                    input {
                        height: 58px;
                        width: 360px;
                        max-width: 100%;
                        padding: 13px 16px;
                        font-size: 16px;
                        border: 1px solid #dee2e6;
                        border-radius: 4px;
                        margin-top: 5px;
                        position: relative;
                    }
                    input:focus {
                        border: 1px solid var(--interactive);
                        outline: 0;
                    }
                    img {
                        position: absolute;
                        top: 52%;
                        right: 5px;
                    }
                `}
            </style>
        </Layout>
    );
};
export default NewsPage;