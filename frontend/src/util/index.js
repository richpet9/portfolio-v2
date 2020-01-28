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

    while (str[length + 1] !== ' ') {
        length--;
    }

    return str.slice(0, length - 2) + '...';
};

export const dateFormat = date => {
    if (typeof date !== Date) {
        date = new Date(date);
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();

    return months[month] + ' ' + day + ', ' + year;
};
