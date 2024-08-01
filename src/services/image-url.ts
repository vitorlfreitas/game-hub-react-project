const getCroppedIMageUrl = (url: string) => {

    const target = 'media/';

    // We want to get the first index after the 'media/'
    const index = url.indexOf(target) + target.length;

    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);

}

export default getCroppedIMageUrl;