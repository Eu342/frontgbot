/**
 * Обработчик отправки get запроса.
 *
 * @param url Адрес запроса.
 */
export function get<T> (url: string): Promise<T> {
    return new Promise<T> ((resolve, reject) => {
        fetch(url)
            .then((response) => {
            if (response.ok) {
                resolve(response.json());
            } else {
                reject(response.status);
            }
        })
            .catch((error) => {
                reject(error);
            });
    });
}

/**
 * Обработчик отправки post запроса.
 *
 * @param url Адрес запроса.
 * @param [data] Тело запроса.
 */
export function post<Req, Res> (url: string, data?: Req): Promise<Res> {
    return new Promise<Res> ((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    resolve(response.json());
                } else {
                    reject(response.status);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}