import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { UnitFunctionsService } from "./unit-functions.service";
import { of } from "rxjs";

describe('UnitFunctionService', () => {
    let service: UnitFunctionsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UnitFunctionsService],
            imports: [HttpClientModule],
        })
        service = TestBed.get(UnitFunctionsService);
    });

    it('should be created' , () => {
        expect(service).toBeTruthy();
    })

    it('square Async', (done) => {
        const num = 5
        service.squareAsync(num).subscribe((result) => {
            expect(result).toBe(num * num);
            done();
        })
    })

    it('fetch data', async () => {
        const result = await service.fetchData();
        expect(result).toBe('Data fetched successfully')
    })

    it('get User Data', (done) => {
        // ! Arrange
        service.getUserData(1).subscribe((userData) => {
            // ! Assert
            expect(userData.id).toBe(1);
            expect(userData.name).toBe('John Doe');
            done();
        })
    })

    it('fetchDataDeomApi', async () => {
        spyOn(service.httpClient, 'get').and.returnValue(of({data: 'example'}));

        const result = await service.fetchDataFromAPI();
        expect(result).toEqual({data: 'example'});
        expect(service.httpClient.get).toHaveBeenCalledWith('https://api.example.com/data');
    })

    it ('asyncSum', async () => {
        const a = 5
        const b = 6

        const reponse = await service.asyncSum(a, b);
        expect(reponse).toBe(a + b);
    })
});

