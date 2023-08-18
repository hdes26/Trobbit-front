import { Injectable } from '@angular/core';
import { CatImage } from '../models/image.model';
import axios from 'axios';
import { environment } from 'src/environments/environments';
import { Cat } from '../models/cat.model';

@Injectable({
    providedIn: 'root'
})
export class CatsService {
    private apiUrl = environment.apiUrl;
    constructor() { }

    async create(catData: Cat): Promise<CatImage[]> {
        const { data } = await axios.post(`${this.apiUrl}/cats`, catData);
        return data;
    }
    async list():Promise<Cat[]> {
        const { data } = await axios.get(`${this.apiUrl}/cats`);
        return data;
    }
    async listById(id: string) {
        const { data } = await axios.get(`${this.apiUrl}/cats/${id}`);
        return data;
    }
    async update(id: string, updateData: { image_id: string, sub_id: string }) {
        const { data } = await axios.patch(`${this.apiUrl}/cats/${id}`, updateData);
        return data;
    }
    async remove(id: string) {
        const { data } = await axios.delete(`${this.apiUrl}/cats/${id}`);
        return data;
    }

}