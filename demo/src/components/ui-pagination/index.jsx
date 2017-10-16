import React from 'react';
import { Card, CardTitle, CardBlock, Col, Pagination, PaginationItem, PaginationLink, Row } from '../../../../src/components';

const UiPagination = () => (
  <Card>
    <CardBlock>
      <Pagination>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem disabled>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>

      <CardTitle tag="h4">Large</CardTitle>
      <Pagination size="lg">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>

      <CardTitle tag="h4">Small</CardTitle>
      <Pagination size="sm">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
          1
        </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
          2
        </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
          3
        </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    </CardBlock>
  </Card>
);

export default UiPagination;