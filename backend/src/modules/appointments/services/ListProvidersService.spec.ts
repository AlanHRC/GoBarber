import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from '@modules/appointments/services/ListProvidersService';

let fakeCacheProvider: FakeCacheProvider;
let fakeUsersRepository: FakeUsersRepository;
let listProvidersService: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeCacheProvider = new FakeCacheProvider();
    fakeUsersRepository = new FakeUsersRepository();

    listProvidersService = new ListProvidersService(
      fakeUsersRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list all providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Alan Henrique',
      email: 'alan@alan.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Alan Henrique 2',
      email: 'alan2@alan.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Alan Henrique 3',
      email: 'alan3@alan.com',
      password: '123456',
    });

    const providers = await listProvidersService.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
