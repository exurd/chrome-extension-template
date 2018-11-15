var sites, index;
sites = [
        "http://google.com",
        "http://yahoo.com",
        "http://bing.com" ];

index = Math.floor(Math.random() * sites.length);

window.location = sites[index];
