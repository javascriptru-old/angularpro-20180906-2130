# Di

- providers
- injector
- dependency

## Provider

{ token, recipe }

- module
- component

### Token

- string (don't use it)
- Class
- InjectionToken (old OpaqueToken)

### InjectionToken

// InjectionToken('service1')
// InjectionToken('service1')

new InjectionToken<UserService>('UserService_TOKEN', {
    provideIn: 'root',
    factory: () => new UserService();
});


### Recipes

- useClass
- useValue
- useFactory
- useExisting


@Component
@Directive
@Pipe
@Injectable

