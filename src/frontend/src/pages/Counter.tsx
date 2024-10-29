//import { useState } from 'react';
import { useEffect, useState } from 'react';
import { backend } from '../../../declarations/backend';

export default function Counter() {
  const [count, setCount] = useState<number | undefined>();
  const [loading, setLoading] = useState(false);
  /*     const [greeting, setGreeting] = useState('');
  
  
      function handleSubmit(event: React.FormEvent<HTMLFormElement>,) {
          event.preventDefault();
          // const name = event.target.elements.name.value;
          backend.greet(name).then((greeting) => {
              setGreeting(greeting);
          });
          return false; */
  // }
  // Get the current counter value
  const fetchCount = async () => {
    try {
      setLoading(true);
      const count = await backend.get_counter();
      setCount(+count.toString()); // Convert BigInt to number
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const increment = async () => {
    if (loading) return; // Cancel if waiting for a new count
    try {
      setLoading(true);
      await backend.inc_counter(); // Increment the count by 1
      await fetchCount(); // Fetch the new count
    } finally {
      setLoading(false);
    }
  };

  // Fetch the count on page load
  useEffect(() => {
    fetchCount();
  }, []);
  return (
    <div className="h-screen   rounded-lg shadow-md text-md shadow-slate-500 bg-zinc-600">
      <div className="ml-12 mt-6 items-center">
                          <h4 >Counter: {count}</h4>
                          <button onClick={increment} disabled={loading} className="m-2 ">
                            +
                          </button>
                        </div>
                      </div>
  )

}