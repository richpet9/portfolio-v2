export const truncateString = (str, length) => {
    if (!str || str.length <= length) return str;

    if (str[0] === '#') {
        let ps = str.split('\n');

        for (let i = 0; i < ps.length; i++) {
            if (ps[i].length > 0 && ps[i][0] !== '#') {
                str = ps[i];
                break;
            }
        }
    }

    while (str[length] && str[length] !== ' ') {
        length--;
    }

    return str.slice(0, length) + '...';
};

export const dateFormat = (date) => {
    if (typeof date !== Date) {
        date = new Date(date);
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();

    return months[month] + ' ' + day + ', ' + year;
};

export const makeUrl = (str) => {
    let res = '';
    //There's a better way to do this right?
    const urlSafeRegex = /[!,@,#,$,%,^,&,*,<,>,(,),\[,\],{,},\\,/,+,=,",',`,.,?,\,,:,;,\ ]/g;
    res = str.toLowerCase().replace(urlSafeRegex, '-');
    for (let i = 0; i < res.length; i++) {
        const chr = res.charAt(i);
        //Check if this char is in the regex
        if (chr === '-') {
            // Check if prev character is a hyphen
            if (res.charAt(i - 1) == '-') {
                res = [res.slice(0, i), res.slice(i + 1)].join('');
            }
            // Check if this hyphen is at the end of the string, and omit it if so
            if (i === res.length - 1) {
                res = res.slice(0, i);
            }
        }
    }
    return res;
};

// This one is courtesy of GitHub
export const getQueryParams = (queryString) => {
    var hashParams = {};
    var e,
        r = /([^?&;=]+)=?([^&;]*)/g,
        q = queryString;
    e = r.exec(q);
    while (e) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
        e = r.exec(q);
    }
    return hashParams;
};
