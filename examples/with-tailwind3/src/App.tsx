import { useState } from 'react';
import { Button, Card } from '@madooei/react-example-package';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>React Example Package Demo</h1>
      <p>This demo shows the React components from @madooei/example-package</p>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <Button onClick={() => setCount(count + 1)}>
          Primary Button (Count: {count})
        </Button>
        
        <Button variant="secondary" onClick={() => setCount(0)}>
          Reset
        </Button>
        
        <Button variant="danger" size="small">
          Small Danger
        </Button>
        
        <Button disabled size="large">
          Disabled Large
        </Button>
      </div>

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <Card title="Basic Card">
          <p>This is a basic card with a title. It demonstrates the Card component from the package.</p>
          <Button size="small">Card Action</Button>
        </Card>
        
        <Card>
          <h4 style={{ marginTop: 0 }}>Card without title prop</h4>
          <p>This card doesn't use the title prop, instead having a custom heading inside the content.</p>
          <p>Click count: {count}</p>
        </Card>
        
        <Card title="Custom Styled Card" className="border-blue-500 border-2">
          <p>This card has custom styling applied via the className prop.</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button variant="primary" size="small">Accept</Button>
            <Button variant="danger" size="small">Decline</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;