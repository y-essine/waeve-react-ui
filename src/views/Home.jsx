import { useState } from 'react';
import Post from '@/components/Post/Post';
import Posts from '@/assets/data/posts';

function Home() {
    const [postsList, _] = useState(Posts);

    return (
        <div className="flex justify-center">
            <div>
                <div className="px-10 mb-5">
                    <div className="font-extrabold select-none text-zinc-300/80">Home</div>
                </div>
                <div className="w-[34rem] px-6">
                    {postsList.map((p) => (
                        <Post key={p.id} post={p} />
                    ))}
                </div>
            </div>
            <div className="font-extrabold select-none text-zinc-300/80">Recommended</div>
        </div>
    );
}

export default Home;
