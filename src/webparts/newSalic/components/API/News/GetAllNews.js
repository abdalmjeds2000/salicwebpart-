import pnp from 'sp-pnp-js';

const GetAllNews = () => pnp.sp.web.lists.getByTitle('News').items.select('Author/Title,Title,CreatedOn,Description,Subject,Photos').expand('Author').orderBy("CreatedOn", false).get()
    .then((res) => {
        return res
    })
    .catch((err) => console.log(err));


export default GetAllNews