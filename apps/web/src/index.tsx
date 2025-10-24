import ReactDOM from 'react-dom/client';
import { UIButton, UIInput } from '@webx/ui';
import { greet } from '@utils/greet';

const App = () => (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        <h1>Vite + npm Workspaces</h1>
        <UIButton
            as='button'
            size='lg'
            onClick={() => alert(greet('Developer'))}
        >
            Click me
        </UIButton>

        <br></br>

        <UIButton
            as='a'
            size='lg'
            target='_blank'
            href='https://google.com'
            onClick={() => alert(greet('Developer'))}
        >
            that is a link
        </UIButton>

        <br/>

        <UIInput />
    </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
