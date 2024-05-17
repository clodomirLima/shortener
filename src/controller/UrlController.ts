import { config } from '../config/Constants';
import { Request, Response } from 'express';
import shortId from 'shortid';
import { URLModel } from '../database/model/URL';

export class UrlController {
    
    public async shorten(req: Request, res: Response): Promise<void> {
        try {
            const { originURL } = req.body;

            const existingURL = await URLModel.findOne({ originURL });
            if (existingURL) {
                res.json(existingURL);
                return;
            }

            const hash = shortId.generate();
            const shortURL = `${config.API_URL}/${hash}`;

            const newURL = await URLModel.create({ hash, shortURL, originURL });
            res.json(newURL);
        } catch (error) {
            console.error('Error while shortening URL:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        try {
            const { hash } = req.params;

            const url = await URLModel.findOne({ hash });
            if (url) {
                res.redirect(url.originURL);
                return;
            }

            res.status(404).json({ error: 'URL not found' });
        } catch (error) {
            console.error('Error while redirecting URL:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
