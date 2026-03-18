export interface RelationCheck {
  /**
   * Key tal como aparece en _count de Prisma.
   * Ejemplo: 'products', 'children', 'orderItems'
   */
  countKey: string;

  /**
   * Texto legible para el mensaje de error.
   * Ejemplo: 'producto(s) asignado(s)', 'subcategoría(s)'
   */
  label: string;
}
