import Link from "next/link";
const News = () => {
  return (
    <section id="news">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Latest Articles"
          data-align="center"
        >
          Latest Articles
        </h3>
        {/* News Shotcode */}
        <div className="fn_cs_news">
          <div className="news_part">
            <div className="left_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>01</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / MetaVerse / 4 Comments</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="/blog-single">
                      Reasons Why People Use Discord
                    </Link>
                  </h3>
                </div>
                <div className="image">
                  <Link href="/blog-single">

                    <img src="/img/blog/1.jpg" alt="" />

                  </Link>
                </div>
                <div className="read_more">
                  <Link href="/blog-single">

                    <span>Read More</span>

                  </Link>
                </div>
              </div>
            </div>
            <div className="right_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>02</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / MetaVerse / 4 Comments</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="/blog-single">
                      Trial-By-Combat: The Death Cup
                    </Link>
                  </h3>
                </div>
                <div className="read_more">
                  <Link href="/blog-single">

                    <span>Read More</span>

                  </Link>
                </div>
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>03</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / NFT / 4 Comments</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="/blog-single">
                      Graffiti Racer Research Center #10
                    </Link>
                  </h3>
                </div>
                <div className="read_more">
                  <Link href="/blog-single">

                    <span>Read More</span>

                  </Link>
                </div>
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>04</span>
                  </span>
                </div>
                <div className="meta">
                  <p>August 09, 2022 / MetaVerse / 4 Comments</p>
                </div>
                <div className="read_more">
                  <Link href="/blog-single">

                    <span>Read More</span>

                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_part">
            <div className="left_bot">
              <Link href="/blog" className="metaportal_fn_button full">

                <span>Read All Articles</span>

              </Link>
            </div>
            <div className="right_bot">
              <p>
                We’re a team of creatives who are excited about unique ideas and
                create consectetur adipiscing elit. Etiam vitae purus a lectus
                semper.
              </p>
            </div>
          </div>
        </div>
        {/* !News Shotcode */}
      </div>
    </section>
  );
};
export default News;
