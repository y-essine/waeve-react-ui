import { useState } from 'react';
import Card from '@/components/card/Card';

function Home() {
    const [list, setList] = useState([
        {
            id: 1,
            title: 'Card 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        },
        {
            id: 2,
            title: 'Card 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        }
    ]);

    return (
        <div>
            <div className="space-y-5">
                {list.map((item) => (
                    <Card key={item.id} card={item} />
                ))}
            </div>
        </div>
    );
}

export default Home;
