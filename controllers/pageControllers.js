// home page
exports.getIndexPage = (req, res) => {
    res.status(200).render('index', {
        page_name: 'index'
    });
};
// about page
exports.getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: 'about'
    });
};
// contact page
exports.getContactPage = (req, res) => {
    res.status(200).render('contact', {
        page_name: 'contact'
    });
};