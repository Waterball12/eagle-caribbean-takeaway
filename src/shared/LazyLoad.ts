export const retry: any = (fn: () => Promise<void>, retriesLeft = 5, interval = 1000) => {
    return new Promise((resolve, reject) => {
        fn()
            .then(resolve)
            .catch(() => {
                setTimeout(() => {
                    if (retriesLeft === 1) {
                        // reject('maximum retries exceeded');
                        return;
                    }

                    // Passing on "reject" is the important part
                    retry(fn, retriesLeft - 1, interval).then(resolve, reject);
                }, interval);
            });
    });
};