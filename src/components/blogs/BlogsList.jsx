import blogs from './BlogsData'; // Importing blogs data from BlogsData file
import Card from './BlogsCard'; // Importing Card component from BlogsCard file

const BlogList = () => { 
    return ( 
        <div>
            <div className='text-center'>
                {/* Heading */}
                <h1 className="text-textcolor font-primary mb-8 mt-10 md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                    Exciting Food Blog Adventures
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> {/* Grid layout for blogs */}
                {/* Mapping through blogs data and rendering Card component for each blog */}
                {blogs.map(blog => (
                    <Card key={blog.id} blog={blog} /> // Passing blog data as props to Card component
                ))}
            </div>
        </div>
    );
};

export default BlogList;
