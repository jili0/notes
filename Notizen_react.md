- no Object or Boolean can be rendered to the page
- jsx renders data als text
- npm run dev
- npm run deploy
- npm uninstall @testing...
- import ReactDOM from 'react-dom/client'
- ReactDOM.createRoot(document.getElementById('root')).render(navbar)
- change dev dependency to production dependency: 
  npm i react-icons --save --prod
- set default props: Header.defaultProps = {title: 'Default Title'}
- CRUD operations: create, read, update, delete
- SPA/MPA: single/ multi-page application
- HOOKS_______________________________________________
- useMemo, useCallback, useRef, useContext
- rules: 
  1. don't call Hooks inside loops, conditions or nested functions. Only call them at the top level
  2. only call hooks from React functions, don't call them from regular js functions
  3. you can call hooks from custom hooks
  4. we can not call hooks inside store(store from easy peasy)
- useRef: for example, using it for shifting focus from button back to input after click
- const inputRef = useRef()
  <input ref = {inputRef}>
  <button onClick={()=> inputRef.current.focus()}>
- useEffect: is asynchronous
- Anwendung useEffect: an ideal way to set State from localStorage or set localStorage to state
- const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({width: undefined, height: undefined})

    useEffect(()=>{
      const handleResize = () => {
        setWindowSize({width: window.innerWidth, height: window.innerHeight})
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      const cleanUp = () => {
        window.removeEventListener('resize', handleResize)
      }
      return cleanUp //prevents memory leak!
    }, [])

    return windowSize
  }
  App.js: const {width, height} = useWindowSize()
- React Router___________________________________
- npm i react-router-dom -S