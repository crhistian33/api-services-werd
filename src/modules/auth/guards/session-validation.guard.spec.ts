import { SessionValidationGuard } from './session-validation.guard';

describe('SessionValidationGuard', () => {
  it('should be defined', () => {
    expect(new SessionValidationGuard()).toBeDefined();
  });
});
