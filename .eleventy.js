module.exports = function(config) {
    
    // allow certain files to be moved to distribution folder
    config.addPassthroughCopy('favicon.ico');
    config.addPassthroughCopy('.htaccess');
  
    // change files outputs for GitHub pages' folder
    return {
        dir: { output: 'docs' }
    };

};