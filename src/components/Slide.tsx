import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {NewCard} from "./NewCard";
import {Link} from "react-router-dom";

interface  IPosts{
    id: string
    slug:string
    title: string
    createdAt:string
    description:{
        text: string
    }
    autor:string
    ima:string
}


export function Slide(props:any)
{

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (

        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={ true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={600}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}

            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"

        >
            {
                props.posts.map((post:IPosts)=>{
                    return (
                        <Link to={`/post/${post.slug}`}>
                            <div className={`relative  h-[25rem] `}>
                                <img src={post.ima} className={'blur-md opacity-90 w-full object-cover'}/>
                                <div className={'absolute  top-[35%]  translate-x-2/3 translate-y-0  text-center'}>
                                    <div className={'w-[36rem]'}>
                                        <p className={'text-black text-[3rem] ' }>{post.title}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    )
                })
            }
        </Carousel>
    )
}