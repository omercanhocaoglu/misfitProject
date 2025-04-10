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
// dasboard page
exports.getDashboardPage = (req, res) => {
    res.status(200).render('dashboard', {
        page_name: 'dashboard'
    });
};
// register page
exports.getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        page_name: 'register'
    });
};