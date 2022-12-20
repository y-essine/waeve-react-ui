import { useState } from 'react';
import Card from '@/components/card/Card';

function Home() {
    const [list, _] = useState([
        {
            id: 1,
            author: {
                name: 'Joaõ Henrique',
                avatar: 'https://picsum.photos/200/302',
                username: 'hendeeznuts'
            },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: '2022-12-20T00:00:00.000Z'
        },
        {
            id: 2,
            author: {
                name: 'Hans Müller',
                avatar: 'https://picsum.photos/200/301',
                username: 'hansimus'
            },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: '2022-12-20T02:56:00.000Z'
        },
        {
            id: 3,
            author: {
                name: 'Eddie V. Halen',
                avatar: 'https://picsum.photos/200/303',
                username: 'vanhalen'
            },
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: '2022-12-20T03:05:00.000Z'
        }
    ]);

    return (
        <div className="flex justify-between">
            <div className="space-y-5">
                {list.map((item) => (
                    <Card key={item.id} card={item} />
                ))}
            </div>
            <div className="space-y-5">Recommends</div>
        </div>
    );
}

export default Home;
