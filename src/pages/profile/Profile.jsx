import './profile.css';
import Header from '../../components/blog/header/Header';
import BlogThumbnail from '../../components/BlogThumbnail';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


function Profile({ /*info, blogData*/ }){
    const userId = useParams().userid;

    const blogData = [
        { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%ED%95%84%EB%A7%88%EC%9D%B4%EB%A6%AC%EB%93%AC1.jpeg?raw=true", date: "2023.12~2024.08", title: "우리 학교를 대표할 브랜딩 & 굿즈 제작기 2탄", url: "/blog/1" },
        { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/20240607_201943.jpg?raw=true", date: "2023.08", title: "반가워 새 동아리 장이야", url: "/blog/2" },
        { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%9A%B4%ED%95%991.jpeg?raw=true", date: "2023.06", title: " 이번 생에 학교 굿즈 제작은 처음이라", url: "/blog/3" },
        { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EB%B2%A0%EB%9F%AC%EB%9D%B5%EC%A6%881.jpeg?raw=true", date: "2023.05", title: "처음 세개 빼고 글 안들어가져요 ㅎㅎ " },
        { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EB%B2%A0%EB%9F%AC%EB%9D%B5%EC%A6%882.jpeg?raw=true", date: "2023.04", title: "#9"},
        { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/20240612_221614.jpg?raw=true", date: "2023.03", title: "#8" },
        { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%95%84%EB%A7%88%EA%B2%9F%EB%8F%882.jpeg?raw=true", date: "2023.02", title: "#7" },
        { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%B9%A0%ED%82%AC1.jpeg?raw=true", date: "2023.01", title: "#6" },
        { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EB%8B%88%EC%BD%9C%EB%9D%BC%EC%8A%A4.jpeg?raw=true", date: "2023.01", title: "#5" },
        { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%8B%A0%EC%9C%A05.jpeg?raw=true", date: "2023.01", title: "#4" },
        { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%B9%A0%ED%82%AC2.jpeg?raw=true", date: "2023.01", title: "#3" },
        { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%95%84%EB%A7%88%EA%B2%9F%EB%8F%881.jpeg?raw=true", date: "2023.01", title: "#2" },
        { image: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%EC%B9%A0%ED%82%AC3.jpeg?raw=true", date: "2023.01", title: "#1" },
    ];

    const info = {
        picture: "https://github.com/react-team-project-kangwon-ljhy/RTP-client/blob/master/public/%ED%95%84%EB%A7%88%EC%9D%B4%EB%A6%AC%EB%93%AC1.jpeg?raw=true",
        name: "박강원"
    }

    return (
        <div id='profile'>
            <Header type="profile" />
            <section>
                <div className='info'>
                    <img className='picture' src={info.picture} />
                    <div className='name'>{info.name}</div>
                </div>
                <div className='blogContainer'>
                {blogData.map((blog, index) => (
                    <BlogThumbnail
                        key={index}
                        image={blog.image}
                        date={blog.date}
                        title={blog.title}
                        url={`/blog/${userId}/${index}`}
                    />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Profile;