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
- import {BrowserRouter, Routes, Route, Limk(or NavLink),useParams, useHistory, Outlet} from 'teact-touter-dom'
- const (id) = useParams()
- const post = posts.find(post => (post.id).toString() === id)
- useHistory(): use browser history
- const history = useHistory()
- history.push('/'): use inside handleDelete, take us back to the homepage
- date-fns_____________________________________
- npm i date-fns -S
- import {format} from 'date-fns'
- const datetime = format(new Date(), 'MMMM dd, yyyy pp')
- createContext______________________________________
- context (›››darkmode) stop drilling props all the way down
- src/context/DataContext.js
- import {createContext, useState, useEffect} from 'react'
- const DataContext = createContext({})
- export const DataProvider = ({children}) => {
    return (
      <DataContext.Provider value = {{width, height, ...}}>
        {children}
      </DataContext.Provider>
    )
  } 
- App,js: import {DataProvider} from './context/DataContext'
  <DataProvider>
    <Route ...> ...
  </DataProvider>
- Header.js: import {useContext} from 'react'; import DataContext from './context/DataContext'
- const Header = () => {
    const {width} = useContext(DataContext)
  }
- JSON Server ________________________________________
- npx json-server -p 3500 -w date/db.json
  (not install as dependency but just work with it, so npx instead of npm)
- request types: get/post/patch(means update)/delete
- const [fetchErr, setFetchErr] = useState(null)
- useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL)
        if (!res.ok) throw Error ('Did not receive data')
        const listItems = await res.json()
        setItems(listItems)
        setFetchErr(null)
      } catch (err) {
        setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchItems()
  }, [])
- const postOptions = {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(myNewItem)
  }
  const result = await apiRequest(API_URL, postOptions)
- axios ______________________________________________
- npm i axios -S
- npmjs.com/package/axios
- src/api/posts.js: import {axios} from 'axios'
- export default axios.create({ baseURL: 'http://localhost:3500'})
- npx json-server -p 3500 -w date/db.json (launch json-server instance)
- App.js: import api from './api/post'
- useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/posts')
        //axios automatically catch errors, so no need to if (!res.ok)..
        setPosts(res.data)
        //axios automatically create that json, so no need to define data 
      } catch (err) {
        if (err.response) {
          console.log(err.response.data)
        } else {
          console.log(err.message)
        }
      }
    }
    fetchPosts()
  }, [])
- handleSubmit: 
  const response = await api.post('/posts', newPost)
  //newPost is response.data. Use this to update the state
- handleDelete:
  await api.post('/post/${id}')
- handleEdit = async () => {
    const updatedPost = {...}
    try {
      const response = await api.put('/post/${id}', updatedPost)
      //while 'put' replaces all fields, 'patch' only updates certain fields
      setPosts(posts.map(post => post.id === id ? {...response.data} : post))
      setEditTitle('')
      setEditBody('')
      history.push('/)
    } catch (err) {console.log(err.message)}
  }
- react-icons________________________________________________
- npm i react-icons
- import { Falaptop, FaTableAlt, FaMobileAlt} from 'react-icons/fa'
- easy-peasy Redux________________________________________
- npm i easy-peasy
- src/store.js: 
  import {createStore, action, thunk, computed} from 'easy-peasy'; import api from './api/posts'
- export default createStore({
    posts: [],
    setPosts: action((state, payload) => {state.posts = payload}),
    postCount: computed((state) => {state.posts.length}),
    getPostById: computed((state) => {return id => state.posts.find(post.id).toString() === id}),
    savePost: thunk(async(actions, newPost, helpers) => {
      const {post} = helpers.getState()
      try {
        const response = await api.post('/post', newPost)
        actions.setPosts([...Posts, response.data])
        actions.setPostTitle('')
        actions.setPostBody('')
      } catch (err) {
        console.log(err.message)
      }
    })
  })
- index.js: 
  import {StoreProvider} from 'easy-peasy'
  import store from './store'
  <StoreProvider store = {store}>
    <Routes>
      <Route ... element = {<App />}>
  </StoreProvider>
- vite _______________________________
- npm create vite@latest
- Bootstrap ___________________________
- npm i bootstrap@latest
- main.jsx: import 'bootstrap/dist/css/bootstrap.css'
- styled components______________________________
- npm install --save styled-components
- styled-components.com
- colornames: translate color name into hex value_______________
- npm i colornames -S
- import colorNames from 'colornames'
- colorNames(red)
