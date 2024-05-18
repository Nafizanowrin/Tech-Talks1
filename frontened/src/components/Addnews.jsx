// import React, { useState } from 'react';
// import './addnews.css'

// function Addnews() {

//     const [newsList, setNewsList] = useState([]);
//     const [formData, setFormData] = useState({ heading: '', content: '' });
//     const [editMode, setEditMode] = useState(false);
//     const [editIndex, setEditIndex] = useState(null);
  
   
//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
    
//     const addNews = () => {
//       if (formData.heading.trim() && formData.content.trim()) {
//         setNewsList([...newsList, formData]);
//         setFormData({ heading: '', content: '' });
//       }
//     };
  
    
//     const editNews = (index) => {
//       setEditMode(true);
//       setEditIndex(index);
//       setFormData(newsList[index]);
//     };
  
    
//     const updateNews = () => {
//       if (formData.heading.trim() && formData.content.trim()) {
//         const updatedNewsList = [...newsList];
//         updatedNewsList[editIndex] = formData;
//         setNewsList(updatedNewsList);
//         setEditMode(false);
//         setEditIndex(null);
//         setFormData({ heading: '', content: '' });
//       }
//     };
  
    
//     const deleteNews = (index) => {
//       const updatedNewsList = newsList.filter((_, idx) => idx !== index);
//       setNewsList(updatedNewsList);
//     };
  




//   return (
//    <>

//    <div className="addnews">

//    <h1>Here Update News are avaiable!!</h1>

//    <div>

//         <div className="news-input">

//         <input
//           type="text"
//           name="heading"
//           value={formData.heading}
//           onChange={handleInputChange}
//           placeholder="News Heading"
//         />
//         <textarea
//           name="content"
//           cols="30"
//           rows="5"
//           value={formData.content}
//           onChange={handleInputChange}
//           placeholder="News Content"
//         />
//         {editMode ? (
//           <button onClick={updateNews}>Update News</button>
//         ) : (
//           <button onClick={addNews}>Add News</button>
//         )}

//         </div>

//       </div>

//       <div>         
//             <ul className="news-card-container">
//             <h3>News List</h3>
//             {newsList.map((news, index) => (
//                 <li key={index} className="card">
                
//                 <h4>{news.heading}</h4>
//                 <p>{news.content}</p>
//                 <div className="button-container">
//                     <button onClick={() => editNews(index)}>Edit</button>
//                     <button onClick={() => deleteNews(index)}>Delete</button>
//                 </div>
//                 </li>
//             ))}
//             </ul>
//       </div>
//     </div>
   
//    </>
//   )
// }

// export default Addnews








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './addnews.css';

// function Addnews() {
//   const [newsList, setNewsList] = useState([]);
//   const [formData, setFormData] = useState({ heading: '', content: '' });
//   const [editMode, setEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     axios.get('/api/news')
//       .then(response => {
//         setNewsList(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching news:', error);
//       });
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const addNews = () => {
//     if (formData.heading.trim() && formData.content.trim()) {
//       axios.post('/api/news', formData)
//         .then(response => {
//           setNewsList([...newsList, response.data]);
//           setFormData({ heading: '', content: '' });
//         })
//         .catch(error => {
//           console.error('Error adding news:', error);
//         });
//     }
//   };

//   const editNews = (index) => {
//     setEditMode(true);
//     setEditIndex(index);
//     setFormData(newsList[index]);
//   };

//   const updateNews = () => {
//     if (formData.heading.trim() && formData.content.trim()) {
//       axios.put(`/api/news/${newsList[editIndex]._id}`, formData)
//         .then(response => {
//           const updatedNewsList = [...newsList];
//           updatedNewsList[editIndex] = response.data;
//           setNewsList(updatedNewsList);
//           setEditMode(false);
//           setEditIndex(null);
//           setFormData({ heading: '', content: '' });
//         })
//         .catch(error => {
//           console.error('Error updating news:', error);
//         });
//     }
//   };

//   const deleteNews = (index) => {
//     axios.delete(`/api/news/${newsList[index]._id}`)
//       .then(() => {
//         const updatedNewsList = newsList.filter((_, idx) => idx !== index);
//         setNewsList(updatedNewsList);
//       })
//       .catch(error => {
//         console.error('Error deleting news:', error);
//       });
//   };

//   return (
//     <>
//       <div className="addnews">
//         <h1>Here Update News are available!!</h1>
//         <div>
//           <div className="news-input">
//             <input
//               type="text"
//               name="heading"
//               value={formData.heading}
//               onChange={handleInputChange}
//               placeholder="News Heading"
//             />
//             <textarea
//               name="content"
//               cols="30"
//               rows="5"
//               value={formData.content}
//               onChange={handleInputChange}
//               placeholder="News Content"
//             />
//             {editMode ? (
//               <button onClick={updateNews}>Update News</button>
//             ) : (
//               <button onClick={addNews}>Add News</button>
//             )}
//           </div>
//         </div>
//         <div>
//           <ul className="news-card-container">
//             <h3>News List</h3>
//             {newsList.map((news, index) => (
//               <li key={index} className="card">
//                 <h4>{news.heading}</h4>
//                 <p>{news.content}</p>
//                 <div className="button-container">
//                   <button onClick={() => editNews(index)}>Edit</button>
//                   <button onClick={() => deleteNews(index)}>Delete</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Addnews;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './addnews.css'

// function Addnews() {

//     const [newsList, setNewsList] = useState([]);
//     const [formData, setFormData] = useState({ heading: '', content: '' });
//     const [editMode, setEditMode] = useState(false);
//     const [editIndex, setEditIndex] = useState(null);
  
  

//   useEffect(() => {
//     axios.get('/api/news')
//       .then(response => {
//         setNewsList(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching news:', error);
//       })

//   }, []);


//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };


//   const addNews = () => {
//     if (formData.heading.trim() && formData.content.trim()) {
//       axios.post('/api/news', formData)
//         .then(response => {
//           setNewsList([...newsList, response.data]);
//           setFormData({ heading: '', content: '' });
//         })
//         .catch(error => {
//           console.error('Error adding news:', error);
//         });
//     }
//   };

//   const editNews = (index) => {
//     setEditMode(true);
//     setEditIndex(index);
//     setFormData(newsList[index]);
//   };

//   const updateNews = () => {
//     if (formData.heading.trim() && formData.content.trim()) {
//       axios.put(`/api/news/${newsList[editIndex]._id}`, formData)
//         .then(response => {
//           const updatedNewsList = [...newsList];
//           updatedNewsList[editIndex] = response.data;
//           setNewsList(updatedNewsList);
//           setEditMode(false);
//           setEditIndex(null);
//           setFormData({ heading: '', content: '' });
//         })
//         .catch(error => {
//           console.error('Error updating news:', error);
//         });
//     }
//   };

//   const deleteNews = (index) => {
//     axios.delete(`/api/news/${newsList[index]._id}`)
//       .then(() => {
//         const updatedNewsList = newsList.filter((_, idx) => idx !== index);
//         setNewsList(updatedNewsList);
//       })
//       .catch(error => {
//         console.error('Error deleting news:', error);
//       });
//   };
  

//   return (
//    <>

//    <div className="addnews">

//    <h1>Here Update News are avaiable!!</h1>

//    <div>

//         <div className="news-input">

//         <input
//           type="text"
//           name="heading"
//           value={formData.heading}
//           onChange={handleInputChange}
//           placeholder="News Heading"
//         />
//         <textarea
//           name="content"
//           cols="30"
//           rows="5"
//           value={formData.content}
//           onChange={handleInputChange}
//           placeholder="News Content"
//         />
//         {editMode ? (
//           <button onClick={updateNews}>Update News</button>
//         ) : (
//           <button onClick={addNews}>Add News</button>
//         )}

//         </div>

//       </div>

//       <div>         
//             <ul className="news-card-container">
//             <h3>News List</h3>
      
//             {Array.isArray(newsList) ? (
//               newsList.map((news, index) => (
//                 <li key={index} className="card">
//                   <h4>{news.heading}</h4>
//                   <p>{news.content}</p>
//                   <div className="button-container">
//                     <button onClick={() => editNews(index)}>Edit</button>
//                     <button onClick={() => deleteNews(index)}>Delete</button>
//                   </div>
//                 </li>
//               ))
//             ) : (
//               <p></p>
//             )}

//             </ul>
//       </div>
//     </div>
   
//    </>
//   )
// }

// export default Addnews




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './addnews.css'

function AddNews() {
  const [newsList, setNewsList] = useState([]);
  const [formData, setFormData] = useState({ heading: '', content: '' });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/news');
      setNewsList(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addNews = async () => {
    try {
      if (formData.heading.trim() && formData.content.trim()) {
        const response = await axios.post('http://localhost:5000/api/news', formData);
        setNewsList([...newsList, response.data]);
        setFormData({ heading: '', content: '' });
      }
    } catch (error) {
      console.error('Error adding news:', error);
    }
  };

  const editNews = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setFormData(newsList[index]);
  };

  const updateNews = async () => {
    try {
      if (formData.heading.trim() && formData.content.trim()) {
        const response = await axios.put(
          `http://localhost:5000/api/news/${newsList[editIndex]._id}`,
          formData
        );
        const updatedNewsList = [...newsList];
        updatedNewsList[editIndex] = response.data;
        setNewsList(updatedNewsList);
        setEditMode(false);
        setEditIndex(null);
        setFormData({ heading: '', content: '' });
      }
    } catch (error) {
      console.error('Error updating news:', error);
    }
  };

  const deleteNews = async (index) => {
    try {
      await axios.delete(`http://localhost:5000/api/news/${newsList[index]._id}`);
      const updatedNewsList = newsList.filter((_, idx) => idx !== index);
      setNewsList(updatedNewsList);
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  return (
    <div className="add-news">
      <h1>Manage News</h1>
      <div className="news-input">
        <input
          type="text"
          name="heading"
          value={formData.heading}
          onChange={handleInputChange}
          placeholder="News Heading"
        />
        <textarea
          name="content"
          cols="30"
          rows="5"
          value={formData.content}
          onChange={handleInputChange}
          placeholder="News Content"
        />
        {editMode ? (
          <button onClick={updateNews}>Update News</button>
        ) : (
          <button onClick={addNews}>Add News</button>
        )}
      </div>
      {/* <ul className="news-list">
                  {Array.isArray(newsList) ? (
              newsList.map((news, index) => (
                <li key={index} className="card">
                  <h4>{news.heading}</h4>
                  <p>{news.content}</p>
                  <div className="button-container">
                    <button onClick={() => editNews(index)}>Edit</button>
                    <button onClick={() => deleteNews(index)}>Delete</button>
                  </div>
                </li>
              ))
            ) : (
              <p></p>
            )}
      </ul> */}


      
         <div className="news-card-container">
            <h3>News List</h3>
             <ul className="news-list">
                  {Array.isArray(newsList) ? (
              newsList.map((news, index) => (
                <li key={index} className="card">
                  <h4>{news.heading}</h4>
                  <p>{news.content}</p>
                  <div className="button-container">
                    <button onClick={() => editNews(index)}>Edit</button>
                    <button onClick={() => deleteNews(index)}>Delete</button>
                  </div>
                </li>
              ))
            ) : (
              <p></p>
            )}
      </ul>
        </div>






    </div>
  );
}

export default AddNews;
