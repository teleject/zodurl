module.exports = function(config) {
    
    // allow certain files to be moved to distribution folder
    config.addPassthroughCopy('zodurl-og-image.jpg');
    config.addPassthroughCopy('favicon.ico');
    config.addPassthroughCopy('.htaccess');
    config.addPassthroughCopy('CNAME');
  
    // change files outputs for GitHub pages' folder
    return {
        dir: { output: 'docs' }
    };

};
