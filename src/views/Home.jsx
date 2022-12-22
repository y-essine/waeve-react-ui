import { useState } from 'react';
import Post from '@/components/Post/Post';
import Posts from '@/assets/data/posts';
import Card from '@/components/Card/Card';
import Recommended from '@/components/layouts/Recommended/Recommended';

function Home() {
    const [postsList, _] = useState(Posts);

    return (
        <>
            {/* <div className="flex justify-center">
                <div className="w-[34rem] px-6">
                    {postsList.map((p) => (
                        <Post key={p.id} post={p} />
                    ))}
                </div>
                <div className="font-extrabold select-none text-zinc-300/80">Recommended</div>
            </div> */}
            <div className="flex">
                <div className="space-y-4">
                    <Card px py title="Post">
                        Veni vidi vici 🙌
                    </Card>
                    <Card px py title="Post">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut ipsa iste
                        quod asperiores est. <br /> <br /> Autem vitae veritatis excepturi quaerat
                        aliquid consequatur ipsa! Similique fuga amet.
                    </Card>
                    <Card px py title="Post">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas atque
                        alias distinctio repudiandae, accusamus modi accusantium molestias
                        reprehenderit eos fuga veniam assumenda.
                        <br />
                        Dolor eius tempore consequuntur voluptatem rem laudantium minima, nulla
                        tenetur?
                    </Card>
                </div>
                <div className="hidden md:block ml-4">
                    <Recommended />
                </div>
            </div>
        </>
    );
}

export default Home;
