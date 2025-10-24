import ReactDOM from 'react-dom/client';
import { UIButton, UIInput } from '@webx/ui';
import { greet } from '@utils/greet';

function handleUserClick() {
    alert(greet('Developer'));
}   

const App = () => (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        <h1>Vite + npm Workspaces</h1>
        <UIButton
            as='button'
            size='lg'
            onClick={handleUserClick}
        >
            Click me
        </UIButton>

        <br></br>

        <UIButton
            as='a'
            size='lg'
            target='_blank'
            href='https://google.com'
            onClick={handleUserClick}
        >
            that is a link
        </UIButton>

        <br/>

        <UIInput />
    </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
