import React, { useContext } from 'react'
import { DataContext } from './context/context';

// const NewsItem = (props) => {
//     let {title,description,imageUrl,newsUrl,date,author,source} = props
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         {/*<Button size="small">Share</Button>*/}
//         <Button size="small">Read More</Button>
//       </CardActions>
//     </Card>
//   );
// }



const NewsItem = (props) => {
    const{mode} = useContext(DataContext);
    let {title,description,imageUrl,newsUrl,date,author,source} = props
  return (
    <>
    <div className="my-3" >
    <div className="card" >
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
        }
        }> 
            <span className="badge rounded-pill bg-danger"> {source} </span>
            {/* https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg */}
        </div>
        <img src={imageUrl} className="card-img-top" alt=" img not available" />
        <div className="card-body" >
            <h5 className="card-title">{title}  </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-${mode}`}>Read More</a>
        </div>
    </div>
</div>


    </>
  )
}

export default NewsItem