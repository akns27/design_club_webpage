import './profile.css';
import Header from '../../components/blog/header/Header';
import BlogThumbnail from '../../components/BlogThumbnail';

function Profile({ id, info, blogData }){
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
                        url={blog.url}
                    />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Profile;