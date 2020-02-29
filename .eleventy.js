module.exports = function(config) {
    config.addPassthroughCopy('favicon.ico');
    config.addPassthroughCopy('.htaccess');
  
    return {
        dir: { output: 'docs' }
    };

};
